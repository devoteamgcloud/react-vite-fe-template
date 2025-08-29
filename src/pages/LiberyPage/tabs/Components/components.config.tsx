import Button from '../../../../components/common/atoms/Button/Button';

export const componentSections = [
  {
    title: 'Button Variants',
    component: (
      <>
        <Button onClick={() => {}} text="Primary" />
        <Button onClick={() => {}} text="Secondary" color="secondary" />
        <Button onClick={() => {}} text="Outlined" variant="outlined" />
        <Button onClick={() => {}} text="Rounded" rounded />
        <Button onClick={() => {}} text="Success" color="success" />
        <Button onClick={() => {}} text="Info" color="info" />
        <Button onClick={() => {}} text="Danger" color="danger" />
        <Button onClick={() => {}} text="Fixed width" width={200} />
        <Button onClick={() => {}} text="Full width" fullWidth />
      </>
    ),
  },
  {
    title: 'Button Sizes',
    component: (
      <>
        <Button onClick={() => {}} text="Small" size="small" />
        <Button onClick={() => {}} text="Medium" size="medium" />
        <Button onClick={() => {}} text="Large" size="large" />
      </>
    ),
  },
];
