import { fetchTreatments } from '@/lib/hook/data'

export default async function TreatmentGrid() {
  const treatments = await fetchTreatments();
  console.log(treatments); 
  return (
    <ul>
      {treatments?.map((treatment) => (
        <li key={treatment.id}>
          {treatment.name}: {treatment.description}
        </li>
      ))}
    </ul>
  );
}

