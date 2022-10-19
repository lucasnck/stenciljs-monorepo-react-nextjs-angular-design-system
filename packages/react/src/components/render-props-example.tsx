interface ITitle {
  children: (title: string) => React.ReactElement<{ title: string }>;
}

// subcomponent
const Title = (props: ITitle) => {
  const name = "teste"

  return props.children(name)
};

// using subcomponent with render props as children prop
export const PageTitle = () => {
  return (
    <div>
      <Title>
        {title => (
          <h1>
            {title}
          </h1>
        )}
      </Title>
    </div>
  )
}
