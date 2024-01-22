import { FC } from 'react';
import Avatar from '../../atoms/Avatar';
import Typography from '../../atoms/Typography';

export interface UserInfoProps {
  userName: string | undefined;
  userPath: string | undefined;
}

const UserInfo: FC<UserInfoProps> = ({ userName, userPath }) => (
  <div className="flex items-center gap-2.5">
    <Avatar name={userName} photo={userPath} />
    <Typography as="span" variant="small">
      {userName}
    </Typography>
  </div>
);

export default UserInfo;
