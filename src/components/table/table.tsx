import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const topSellingProducts = [
  {
    name: "ASOS Ridley High Waist",
    price: "$250.00",
    quantity: "82",
    amount: "$6,518.18",
  },
  {
    name: "Marco Lightweight Shirt",
    price: "$250.00",
    quantity: "37",
    amount: "$4,754.18",
  },
  {
    name: "Half Sleeve Shirt",
    price: "$250.00",
    quantity: "82",
    amount: "$6,518.18",
  },
  {
    name: "Lightweight Jacket",
    price: "$250.00",
    quantity: "82",
    amount: "$6,518.18",
  },
  {
    name: "Marco Shoes",
    price: "$250.00",
    quantity: "82",
    amount: "$6,518.18",
  }, {
    name: "Half Sleeve Shirt",
    price: "$250.00",
    quantity: "82",
    amount: "$6,518.18",
  },
  {
    name: "Lightweight Jacket",
    price: "$250.00",
    quantity: "82",
    amount: "$6,518.18",
  },
  {
    name: "Marco Shoes",
    price: "$250.00",
    quantity: "82",
    amount: "$6,518.18",
  },
];

export function TableData() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {topSellingProducts.map((products) => (
          <TableRow key={products.name}>
            <TableCell>{products.name}</TableCell>
            <TableCell>{products.price}</TableCell>
            <TableCell>{products.quantity}</TableCell>
            <TableCell>{products.amount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
