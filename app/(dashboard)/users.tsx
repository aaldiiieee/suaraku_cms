import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal } from 'lucide-react';
import { TableCell, TableRow } from '@/components/ui/table';
import { UserTypes } from 'app/types/users';

export function Users({ usersData }: { usersData: UserTypes[] }) {
  return (
    <>
      {usersData?.map((user) => (
        <TableRow key={user.mu_id}>
          {/* <TableCell className="hidden sm:table-cell">
            <Image
              alt={`${user.mu_fullname}'s image`}
              className="aspect-square rounded-md object-cover"
              height={64}
              src="/placeholder-image.png"
              width={64}
            />
          </TableCell> */}
          <TableCell className="font-medium">{user.mu_fullname}</TableCell>
          <TableCell className="font-medium">{user.mu_nik}</TableCell>
          <TableCell>
            <Badge variant="outline" className="capitalize">
              {user.mu_blood_type}
            </Badge>
          </TableCell>
          <TableCell className="hidden md:table-cell">
            {user.mu_phoneNumber}
          </TableCell>
          <TableCell className="hidden md:table-cell">
            {user.mu_address}
          </TableCell>
          <TableCell className="hidden md:table-cell">{user.mu_province}</TableCell>
          <TableCell className="hidden md:table-cell">{user.mu_city}</TableCell>
          <TableCell className="hidden md:table-cell">{user.mu_district}</TableCell>
          <TableCell>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button aria-haspopup="true" size="icon" variant="ghost">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </TableCell>
        </TableRow>
      ))}
    </>
  );
}
