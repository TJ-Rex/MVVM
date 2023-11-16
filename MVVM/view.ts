import { UserViewModel } from "./viewModel";

// Vista (View)}

export class UserView {

    // Referencia al ViewModel

    constructor(private viewModel: UserViewModel) {}
  
    // Método para mostrar los usuarios en la Vista

    showUsers(): void {

      console.log("Lista de usuarios: ");

      for (const user of this.viewModel.users) {

        console.log(`Nombre: ${user.name} - Edad: ${user.age}`);

      }
    }
  }