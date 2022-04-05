import { Test, TestingModule } from '@nestjs/testing';
import { DimensaoController } from './dimensao.controller';
import { DimensaoService } from './dimensao.service';

describe('DimensaoController', () => {
  let controller: DimensaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DimensaoController],
      providers: [DimensaoService],
    }).compile();

    controller = module.get<DimensaoController>(DimensaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
