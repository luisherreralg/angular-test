import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService {
  constructor() {}

  getAll(): Promise<Robot[]> {
    return fetch(
      'https://two02210-w7ch5-luis-herrera-server.onrender.com/robots',
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiTHVpcyIsImlkIjoiNjM3ZTE3ZTI4MTZiYTBlZTQ5ZDBlODBmIiwicm9sZSI6InVzZXIiLCJpYXQiOjE2NjkzMjUyMjV9.4fJvpgCQF-0PdtpWGOLk66_jnxe0koU8Zt9e3ho9-yw`,
        },
      }
    ).then((response) => response.json());
  }
}

export type Robot = {
  _id: string;
  name: string;
  image: string;
  speed: number;
  endurance: number;
  creationDate: string;
  __v: number;
};
