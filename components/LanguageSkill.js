const component = ({lang, level, value}) => (
  <>
    <dt>{lang}</dt>
    <dd><progress max={4} value={value}>{level}</progress></dd>
  </>
)


export default component
