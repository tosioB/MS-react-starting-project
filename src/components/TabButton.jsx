function TabButton({ label, isSelected, ...props }) {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {label}
      </button>
    </li>
  );
}

export default TabButton;
