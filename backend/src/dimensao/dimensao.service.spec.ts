import { Test, TestingModule } from '@nestjs/testing';
import { DimensaoService } from './dimensao.service';

describe('DimensaoService', () => {
  let service: DimensaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DimensaoService],
    }).compile();

    service = module.get<DimensaoService>(DimensaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
