import { Router } from "express";


const router = Router();

// Mount routes
// router.use('/auth', authRoutes);s
// router.use('/users', userRoutes);
// router.use('/transactions', transactionRoutes);

// API Info
router.get('/', (req, res) => {
    res.json({
        message: 'API is running',
        version: '1.0.0',
        endpoints: {
            auth: '/api/auth',
            users: '/api/users',
            transactions: '/api/transactions'
        }
    })
})

export {router as routes}