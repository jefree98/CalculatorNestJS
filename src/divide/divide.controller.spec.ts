import { Test, TestingModule } from '@nestjs/testing';
import { DivideController } from './divide.controller';

describe('DivideController', () => {
  let controller: DivideController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DivideController],
    }).compile();

    controller = module.get<DivideController>(DivideController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
