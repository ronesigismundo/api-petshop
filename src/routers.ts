import { Router } from 'express'

import { ProvidersControllers } from './controllers/ProvidersControllers'

const router = Router();

const providersControllers = new ProvidersControllers

router.get('/api/providers', providersControllers.show )
router.post('/api/providers', providersControllers.create )

export { router }