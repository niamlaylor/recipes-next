import StepListItem from "./StepListItem";

export default function StepList ({ steps }) {

  const stepListItems = steps.map((step, index) => {
    return (
      <StepListItem
        key={index}
        step={step}
      />
    )
  })

  return (
    <ul>
      {stepListItems}
    </ul>
  );
}