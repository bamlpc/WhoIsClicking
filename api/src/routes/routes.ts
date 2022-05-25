import { Router } from 'deps';
import  { get as getTodo, post as postTodo} from '../controller/controller.ts';

const router = new Router();

router.get('/', getTodo )
router.post('/', postTodo )

export default router;