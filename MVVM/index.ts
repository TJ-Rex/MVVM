import { User } from "./model";
import { UserViewModel } from "./viewModel";
import { UserView } from "./view";

// Uso
// Creamos instancias

const viewModel = new UserViewModel();

const view = new UserView(viewModel);

// Agregamos un usuario a través del ViewModel
viewModel.addUser("Juan", 30);

viewModel.addUser("Peter", 46);

// Mostramos los usuarios a través de la Vista
view.showUsers();