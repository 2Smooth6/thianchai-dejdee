require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dns = require('dns');

// Set DNS servers to Google DNS to fix SRV lookup issue on some Windows environments
dns.setServers(['8.8.8.8', '8.8.4.4']);

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
if (!MONGODB_URI) {
    console.error('Error: MONGODB_URI is not defined in the environment variables.');
    process.exit(1);
}

mongoose.connect(MONGODB_URI)
    .then(() => console.log('Connected to MongoDB successfully.'))
    .catch((err) => {
        console.error('Failed to connect to MongoDB:', err.message);
        process.exit(1);
    });

// Define Post Schema and Model
const postSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true,
        trim: true
    },
    content: { 
        type: String, 
        required: true,
        trim: true
    },
    views: {
        type: Number,
        default: 0
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
});

// Format database output: Map _id to id and remove __v
postSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        ret.id = ret._id.toString();
        delete ret._id;
    }
});

const Post = mongoose.model('Post', postSchema);

// GET / - Root route to show API status
app.get('/', (req, res) => {
    res.json({
        message: "Welcome to the Blog API with MongoDB Persistence!",
        endpoints: {
            getAllPosts: "GET /posts",
            getPostById: "GET /posts/:id",
            createPost: "POST /posts (JSON body with 'title' and 'content')",
            deletePost: "DELETE /posts/:id",
            incrementView: "POST /posts/:id/view",
            topPosts: "GET /analytics/top-posts"
        }
    });
});

// GET /posts - Retrieve all blog posts
app.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find().sort({ createdAt: -1 });
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch posts.' });
    }
});

// GET /analytics/top-posts - Retrieve top 3 posts based on views
app.get('/analytics/top-posts', async (req, res) => {
    try {
        const topPosts = await Post.find().sort({ views: -1 }).limit(3);
        res.json(topPosts);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch analytics data.' });
    }
});

// POST /posts - Create a new blog post
app.post('/posts', async (req, res) => {
    const { title, content } = req.body;

    // Validation
    if (!title || typeof title !== 'string' || title.trim() === '') {
        return res.status(400).json({ error: 'Title is required and must be a non-empty string.' });
    }
    if (!content || typeof content !== 'string' || content.trim() === '') {
        return res.status(400).json({ error: 'Content is required and must be a non-empty string.' });
    }

    try {
        const newPost = new Post({
            title: title.trim(),
            content: content.trim()
        });
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create post.' });
    }
});

// GET /posts/:id - Retrieve a specific blog post by ID
app.get('/posts/:id', async (req, res) => {
    const id = req.params.id;

    // Validate if the id is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid ID format.' });
    }

    try {
        const post = await Post.findById(id);
        if (!post) {
            return res.status(404).json({ error: `Post with ID ${id} not found.` });
        }
        res.json(post);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve the post.' });
    }
});

// POST /posts/:id/view - Increment the view count for a specific post
app.post('/posts/:id/view', async (req, res) => {
    const id = req.params.id;

    // Validate if the id is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid ID format.' });
    }

    try {
        const post = await Post.findByIdAndUpdate(
            id, 
            { $inc: { views: 1 } }, 
            { returnDocument: 'after' }
        );
        if (!post) {
            return res.status(404).json({ error: `Post with ID ${id} not found.` });
        }
        res.json({ message: 'View count updated.', post });
    } catch (error) {
        res.status(500).json({ error: 'Failed to increment view count.' });
    }
});

// DELETE /posts/:id - Delete a specific blog post by ID
app.delete('/posts/:id', async (req, res) => {
    const id = req.params.id;

    // Validate if the id is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: 'Invalid ID format.' });
    }

    try {
        const deletedPost = await Post.findByIdAndDelete(id);
        if (!deletedPost) {
            return res.status(404).json({ error: `Post with ID ${id} not found.` });
        }
        res.json({ message: 'Post deleted successfully.', deletedPost });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete the post.' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
