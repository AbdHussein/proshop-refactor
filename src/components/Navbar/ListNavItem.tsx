/* eslint-disable import/extensions */
import { FC, ReactNode } from 'react';
import { ListItem, CustomLink, Badge } from './NavBarStyles';

interface Props {
  icon: ReactNode;
  to: string;
  isBadge?: boolean;
  countBadge?: number;
  onClick?: () => void;
}

export const ListNavItem: FC<Props> = ({
  icon,
  to,
  children,
  isBadge,
  countBadge,
  onClick,
}) => {
  return (
    <ListItem onClick={onClick}>
      <CustomLink to={to}>
        {isBadge && <Badge>{countBadge}</Badge>}
        {icon}
        {children}
      </CustomLink>
    </ListItem>
  );
};
