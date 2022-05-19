import { Router } from '../../deps.ts';
import  { get as getTodo} from '../controller/controller.ts';

const router = new Router();

router.get('/', getTodo )

export default router;