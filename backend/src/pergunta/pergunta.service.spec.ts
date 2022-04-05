import { Test, TestingModule } from '@nestjs/testing';
import { PerguntaService } from './pergunta.service';

describe('PerguntaService', () => {
  let service: PerguntaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PerguntaService],
    }).compile();

    service = module.get<PerguntaService>(PerguntaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
