import { Test, TestingModule } from '@nestjs/testing';
import { DiscenteController } from './discente.controller';
import { DiscenteService } from './discente.service';

describe('DiscenteController', () => {
  let controller: DiscenteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiscenteController],
      providers: [DiscenteService],
    }).compile();

    controller = module.get<DiscenteController>(DiscenteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
