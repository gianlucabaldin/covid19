### Test single file

```
npm run test -t MainContainer --verbose
```

### Log html

```
it('should have a Box', () => {
    wrapper = mount(<ItalyContainer />);
    console.log(wrapper.debug());
})
```

### Look for html item

```
it('should have an email field', () => {
    expect(container.find('input[type="email"]').length).toEqual(1);
});
// or
it('should have an email field', () => {
    expect(wrapper.find('.MuiTypography-h6').exists()).toEqual(true);
});

```

### Check html item properties

```
it('should have proper props for email field', () => {
    expect(container.find('input[type="email"]').props()).toEqual({
        className: 'mx-auto my-2',
        onBlur: expect.any(Function),
        placeholder: 'email',
        type: 'email',
    });
});
```

### Look for text inside

```
// https://github.com/FormidableLabs/enzyme-matchers/blob/master/packages/jest-enzyme/README.md
it('has a left-aligned `Covid 19` text', () => {
    expect(wrapper).toIncludeText('Covid 19');
});

// or with {getByText}

it('has a center-aligned project description - with Enzyme', () => {
    const { getByText } = render(<Header />);
    expect(getByText('Latest updates & historical data')).toBeInTheDocument();
});
```

### Look for React Component children (inside another)

#### pointing to a particular inner className

Attention: with MaterialUi a <Box className="myClassname"> outputs as

```
<Box className="myClassname" ...>
    <div className="myClassname" ...>
    ...
```

so if you "only" look for ".className" an check the lenght, it will be 2 (not 1) !!! Use stronger selector, like elementType+className (i.e. below 'div.summary)

```
it('contains Summary component', () => {
    wrapper = mount(<MainContainer />);
    expect(wrapper.find('div.summary').length).toEqual(1);
});
```

#### with Enzyme find()

```
it('contains Summary component', () => {
    expect(wrapper.find(<Summary />).length).toEqual(1);
});
```

#### with Enzyme contains()

```
it('contains Summary component', () => {
    expect(wrapper.contains(<Summary />)).toEqual(true);
});
```

#### with Enzyme.find() + length.toEqual(num) --> BEST !

##### look for a "Component" component after importing it, not the jsx "<Component>" string version

```
it('should have 3 buttons', () => {
let wrapper = mount(<NavButtons />);
expect(wrapper.find(Button).length).toEqual(3);
});
```

or

```
it('should have 3 buttons', () => {
let wrapper = mount(<NavButtons />);
expect(wrapper.contains(Button)).toEqual(true);
expect(wrapper.find(Button).length).toEqual(3);
});
```

##### look for a "Component" component string-representation, not the jsx "<Component>" version

```
it('should have 3 buttons', () => {
let wrapper = mount(<NavButtons />);
expect(wrapper.find('WithStyles(ForwardRef(Button))').length).toEqual(3);
});
```

##### look for a component child by "data-id" attribute

```
it('should have 3 buttons', () => {
const wrapper = shallow(<ItalyChart data={mockData} />);
// expect(wrapper.find('[data-id="chart-italy"]').length).toEqual(1);
});
```
