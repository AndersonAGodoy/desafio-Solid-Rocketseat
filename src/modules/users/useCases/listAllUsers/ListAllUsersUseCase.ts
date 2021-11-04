import { User } from '../../model/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
	user_id: string;
}

class ListAllUsersUseCase {
	constructor(private usersRepository: IUsersRepository) {}

	execute({ user_id }: IRequest): User[] {
		const user = this.usersRepository.findById(user_id);

		if (user.admin === false || !user) {
			throw new Error('This user can not access the list of users');
		}

		const usersList = this.usersRepository.list();

		return usersList;
	}
}

export { ListAllUsersUseCase };
