import useManageTreatments from "@/lib/hook/useManageTreatments";

export default function TreatmentGrid({ treatments }) {
  return (
    <ul>
      {treatments.map((treatment) => (
        <li key={treatment.id}>
          {treatment.name}: {treatment.description}
        </li>
      ))}
    </ul>
  );
}

