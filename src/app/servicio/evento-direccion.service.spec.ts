import { TestBed } from '@angular/core/testing';

import { EventoDireccionService } from './evento-direccion.service';

describe('EventoDireccionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventoDireccionService = TestBed.get(EventoDireccionService);
    expect(service).toBeTruthy();
  });
});
