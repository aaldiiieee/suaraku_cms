'use client';

import {
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  Table
} from '@/components/ui/table';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Users } from './users';
import { useRouter } from 'next/navigation';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useUsers } from 'app/hooks/useUsers';

export function UsersTable() {
  // let router = useRouter();
  // let productsPerPage = 5;

  // function prevPage() {
  //   router.back();
  // }

  // function nextPage() {
  //   router.push(`/?offset=${offset}`, { scroll: false });
  // }

  const { useAllUsers } = useUsers();
  const { users, isLoading } = useAllUsers();
  console.log(users, "<---- users");

  return (
    <Card>
      <CardHeader>
        <CardTitle>Data Warga</CardTitle>
        <CardDescription>
          Manajemen data warga
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              {/* <TableHead className="hidden w-[100px] sm:table-cell">
                <span className="sr-only">Image</span>
              </TableHead> */}
              <TableHead>Nama Lengkap</TableHead>
              <TableHead>NIK</TableHead>
              <TableHead>Golongan Darah</TableHead>
              <TableHead className="hidden md:table-cell">Nomor Telepon</TableHead>
              <TableHead className="hidden md:table-cell">
                Alamat Lengkap
              </TableHead>
              <TableHead className="hidden md:table-cell">Provinsi</TableHead>
              <TableHead className="hidden md:table-cell">Kabupaten/Kota</TableHead>
              <TableHead className="hidden md:table-cell">Kecamatan</TableHead>
              <TableHead>
                <span className="sr-only">Actions</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <Users usersData={users} />
          </TableBody>
        </Table>
      </CardContent>
      {/* <CardFooter>
        <form className="flex items-center w-full justify-between">
          <div className="text-xs text-muted-foreground">
            Showing{' '}
            <strong>
              {Math.max(0, Math.min(offset - productsPerPage, totalProducts) + 1)}-{offset}
            </strong>{' '}
            of <strong>{totalProducts}</strong> products
          </div>
          <div className="flex">
            <Button
              formAction={prevPage}
              variant="ghost"
              size="sm"
              type="submit"
              disabled={offset === productsPerPage}
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Prev
            </Button>
            <Button
              formAction={nextPage}
              variant="ghost"
              size="sm"
              type="submit"
              disabled={offset + productsPerPage > totalProducts}
            >
              Next
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </form>
      </CardFooter> */}
    </Card>
  );
}
