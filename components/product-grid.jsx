import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const products = [
  { id: 1, name: 'Captain America Shield T-Shirt', price: '$25' },
  { id: 2, name: 'Captain America Hoodie', price: '$45' },
  { id: 3, name: 'Captain America Cap', price: '$20' },
  { id: 4, name: 'Captain America Jacket', price: '$75' },
];

export default function ProductGrid() {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <Card key={product.id} className="bg-[#1E1E24]">
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold">{product.price}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}