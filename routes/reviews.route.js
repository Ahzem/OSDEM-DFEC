import express from 'express';
import { 
  ReviewCreate, 
  ReviewDelete, 
  ReviewIndex, 
  ReviewUpdate 
} from '../controllers/reviews.controller.js';

const router = express.Router();

// CRUD operations
// Create
router.post('/', ReviewCreate);
  
  // Read
  router.get('/', ReviewIndex);
  
  // Update
  router.put('/:id', ReviewUpdate);

  // Delete
  router.delete('/:id', ReviewDelete);

  export default router;