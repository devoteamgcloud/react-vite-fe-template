import Button from '../../../../components/common/atoms/Button/Button'
import Switch from '../../../../components/common/atoms/Switch/Switch'

export const componentSections = [
  {
    title: 'Button Variants',
    component: (
      <>
        <Button onClick={() => { }} text="Primary" />
        <Button onClick={() => { }} text="Secondary" color="secondary" />
        <Button onClick={() => { }} text="Outlined" variant="outlined" />
        <Button onClick={() => { }} text="Edgy" edgy />
        <Button onClick={() => { }} text="Success" color="success" />
        <Button onClick={() => { }} text="Info" color="info" />
        <Button onClick={() => { }} text="Danger" color="danger" />
        <Button onClick={() => { }} text="100%" width="100%" />
      </>
    ),
  },
  {
    title: 'Button Sizes',
    component: (
      <>
        <Button onClick={() => { }} text="Small" size="small" />
        <Button onClick={() => { }} text="Medium" size="medium" />
        <Button onClick={() => { }} text="Large" size="large" />
      </>
    ),
  },
  {
    title: 'Switch variants',
    component: (
      <>
        <Switch onChange={() => { }} variant={"strip"} text="Strip" />
        <Switch onChange={() => { }} variant={"square"} text="Square" />
        <Switch onChange={() => { }} variant={"round"} text="Round" />
      </>
    ),
  },

]
