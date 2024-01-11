import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import NavBar from '../app/components/nav-bar'
import Footer from '@/app/components/footer';
 
describe('NavBar', () => {
  it('renders a link on the home icon', () => {
    render(<NavBar/>)
 
    const link = screen.getByLabelText('homeIcon')
    
    expect(link).toBeInTheDocument()
    expect(link.getAttribute('href')).toEqual('/')
  }),
  it('renders a link on the dropdown-home item', () => {
    render(<NavBar/>)
 
    const link = screen.getByLabelText('dropdown-home')
    
    expect(link).toBeInTheDocument()
    expect(link.getAttribute('href')).toEqual('/')
  }),
  it('renders a link to articles/all on the "Posts" item', () => {
    render(<NavBar/>)
 
    const link = screen.getByLabelText('posts')
    
    expect(link).toBeInTheDocument()
    expect(link.getAttribute('href')).toEqual('/articles/all')
  }),
  it('renders a link to articles/all on the "dropdown-posts" item', () => {
    render(<NavBar/>)
 
    const link = screen.getByLabelText('dropdown-posts')
    
    expect(link).toBeInTheDocument()
    expect(link.getAttribute('href')).toEqual('/articles/all')
  }),
  it('renders a link to /resume/current on the "My CV" item', () => {
    render(<NavBar/>)
 
    const link = screen.getByLabelText('cv')
    
    expect(link).toBeInTheDocument()
    expect(link.getAttribute('href')).toEqual('/resume/current')
  }),
  it('renders a link to /resume/current on the "dropdown-cv" item', () => {
    render(<NavBar/>)
 
    const link = screen.getByLabelText('dropdown-cv')
    
    expect(link).toBeInTheDocument()
    expect(link.getAttribute('href')).toEqual('/resume/current')
  }),
  it('renders a link to /resources on the "Resources" item', () => {
    render(<NavBar/>)
 
    const link = screen.getByLabelText('resources')
    
    expect(link).toBeInTheDocument()
    expect(link.getAttribute('href')).toEqual('/resources')
  }),
  it('renders a link to /resources on the "dropdown-resources" item', () => {
    render(<NavBar/>)
 
    const link = screen.getByLabelText('dropdown-resources')
    
    expect(link).toBeInTheDocument()
    expect(link.getAttribute('href')).toEqual('/resources')
  }),
  it('renders an input of type "text"', () => {
    render(<NavBar/>)

    const search_box = screen.getByRole('textbox')
    expect(search_box).toBeInTheDocument()
    expect(search_box.getAttribute('name')).toBe("search")
  }),
  it('renders the main navbar container', () => {
    render(<NavBar/>)
 
    const link = screen.getByLabelText('navbar-container')
    
    expect(link).toBeInTheDocument()
  }),
  it('renders the navbar-start container', () => {
    render(<NavBar/>)
 
    const link = screen.getByLabelText('navbar-start')
    
    expect(link).toBeInTheDocument()
  }),
  it('renders the navbar-center container', () => {
    render(<NavBar/>)
 
    const link = screen.getByLabelText('navbar-center')
    
    expect(link).toBeInTheDocument()
  }),
  it('renders the navbar-end container', () => {
    render(<NavBar/>)
 
    const link = screen.getByLabelText('navbar-end')
    
    expect(link).toBeInTheDocument()
  })
})

describe("Footer", () => {
  it('renders the main footer container', () => {
    render(<Footer/>)
 
    const link = screen.getByLabelText('footer-container')
    
    expect(link).toBeInTheDocument()
  }),
  it('renders the footer branding container', () => {
    render(<Footer/>)
 
    const link = screen.getByLabelText('footer-branding')
    
    expect(link).toBeInTheDocument()
  }),
  it('renders the footer services container', () => {
    render(<Footer/>)
 
    const link = screen.getByLabelText('footer-services')
    
    expect(link).toBeInTheDocument()
  }),
  it('renders the footer contact container', () => {
    render(<Footer/>)
 
    const link = screen.getByLabelText('footer-contact')
    
    expect(link).toBeInTheDocument()
  }),
  it('renders the footer logo', () => {
    render(<Footer/>)
 
    const link = screen.getByLabelText('footer-logo')
    
    expect(link).toBeInTheDocument()
  })
})