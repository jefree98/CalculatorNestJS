import { Test, TestingModule } from '@nestjs/testing';
import { SubtractController } from './subtract.controller';

describe('SubtractController', () => {
  let controller: SubtractController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubtractController],
    }).compile();

    controller = module.get<SubtractController>(SubtractController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
