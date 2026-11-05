/**
 * The logo, read as what it looks like: a toggle. Off, the knob is the crescent (night, the idea);
 * on, it slides across and fills into the disc (day, the launch). Styled in globals.css.
 */
export default function LightSwitch({
  on,
  onChange,
  ref,
}: {
  on: boolean;
  onChange: (on: boolean) => void;
  ref?: React.Ref<HTMLButtonElement>;
}) {
  return (
    <button
      ref={ref}
      type="button"
      role="switch"
      aria-checked={on}
      aria-label="Lights on"
      data-on={on || undefined}
      onClick={() => onChange(!on)}
      className="switch hole inline-block h-[0.78em] w-[1.75em] rounded-full align-[-0.06em] mx-[0.08em] outline-offset-4"
    >
      <span aria-hidden className="switch-knob">
        <span className="light absolute inset-0 rounded-full" />
        <span className="switch-shadow" />
      </span>
    </button>
  );
}
