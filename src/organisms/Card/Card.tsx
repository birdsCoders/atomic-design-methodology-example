import { FC } from 'react';
import { To } from 'react-router-dom';
import CategoryDateRow, { CategoryDateProps } from '../../molecules/CategoryDateRow';
import LinkBase from '../../atoms/Link';
import Photo from '../../atoms/Photo';
import Typography from '../../atoms/Typography';
import UserInfo, { UserInfoProps } from '../../molecules/UserInfo';

interface Props extends CategoryDateProps, UserInfoProps {
  media: string | undefined;
  title: string | undefined;
  url: To;
}

const Card: FC<Props> = ({ category, date, media, title, url, userName, userPath }) => (
  <article>
    <Photo image={media} alt={title} className="mb-3" />
    <CategoryDateRow category={category} date={date} className="mb-2" />
    <Typography variant="h3" className="mb-4" color="secondary">
      <LinkBase to={url}>{title}</LinkBase>
    </Typography>
    <UserInfo userName={userName} userPath={userPath} />
  </article>
);

export default Card;
