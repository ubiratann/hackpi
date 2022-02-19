import { Test, TestingModule } from '@nestjs/testing';
import { DiscenteService } from './discente.service';

describe('DiscenteService', () => {
  let service: DiscenteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DiscenteService],
    }).compile();

    service = module.get<DiscenteService>(DiscenteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
