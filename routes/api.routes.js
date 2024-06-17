import express from 'express';
import { 
  createBoard, deleteBoard, getAllBoardsOfaUser 
} from '../controllers/boards.js';
import { 
  createList, deleteList, getAllListsOfaBoard 
} from '../controllers/lists.js';
import { 
  createCard, deleteCard, getAllCardsOfaList 
} from '../controllers/cards.js';
import { 
  createChecklist, deleteChecklist, getAllChecklistsOfaCard 
} from '../controllers/checklists.js';
import { 
  createCheckitem, deleteCheckitem, updateCheckitem 
} from '../controllers/checkitems.js';
import { getAllColors, getAllImages } from '../controllers/colors.images.js';

const router = express.Router();



router.get('/colors', getAllColors);


router.get('/images', getAllImages);


router.get('/boards', getAllBoardsOfaUser);


router.post('/board', createBoard);


router.delete('/board/:id', deleteBoard);


router.get('/board/:boardId/lists', getAllListsOfaBoard);


router.post('/board/:boardId/list', createList);


router.delete('/list/:id', deleteList);


router.get('/list/:listId/cards', getAllCardsOfaList);


router.post('/list/:listId/card', createCard);


router.delete('/card/:id', deleteCard);


router.get('/card/:cardId/checklists', getAllChecklistsOfaCard);


router.post('/card/:cardId/checklist', createChecklist);


router.delete('/checklist/:id', deleteChecklist);


router.post('/checklist/:checklistId/checkitem', createCheckitem);


router.put('/checkitem/:id', updateCheckitem);


router.delete('/checkitem/:id', deleteCheckitem);

export default router;
