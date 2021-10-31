const component = ({name, level, value}) => (
  <>
    <dt>{name}</dt>
    <dd><meter max={7} value={value}>{level}</meter></dd>
  </>
)


export default component
