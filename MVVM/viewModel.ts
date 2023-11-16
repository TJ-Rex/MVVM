import { User } from "./model";

// ViewModel

export class UserViewModel {

    // Lista de usuarios

    users: User[] = [];
  
    // Método para agregar un usuario al ViewModel

    addUser(name: string, age: number): void {

      const user = new User(name, age);

      this.users.push(user);
        
    }
  }