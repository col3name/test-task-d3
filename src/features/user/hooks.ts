import {useAppDispatch} from 'app/hooks';
import {User} from './model';
import {clearUser, updateUser} from './slice';

export const useUpdateUser = () => {
  const dispatch = useAppDispatch();

  return (user: User) => {
    dispatch(updateUser(user));
  }
}
export const useClearUser = () => {
  const dispatch = useAppDispatch();

  return () => {
    dispatch(clearUser());
  }
}