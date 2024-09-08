import { Injectable } from '@nestjs/common';

import { EventEmitter2, OnEvent } from '@nestjs/event-emitter';


@Injectable()
export class UsersService {
  constructor(
    private eventEmitter: EventEmitter2,
  ) {}


  }
