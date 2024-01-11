import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Card from '@/app/components/Card'
import ObjectID from 'bson-objectid'
import { Tag } from '@/app/models/article'

const mockArticleBuilder = () => {
    let mockTags: Tag[] = [];
    let mockArticle;
    const mockTagIDs = [new ObjectID().toHexString(), new ObjectID().toHexString(), new ObjectID().toHexString()]
    mockArticle = {
        id: new ObjectID().toHexString(),
        image: "https://drscdn.500px.org/photo/1083418373/q%3D80_m%3D600/v2?sig=df14fb3586104bb9f7de82ab02923a8532ed20bbd1630400a8d3bc0e8ab4de63",
        title: "Test Article",
        description: "A test article is a testicle?",
        createDate: new Date(),
        content: "Content test. Contest. Testing . . . Content Blah Blah Blah",
        actions: ['homeLimit'],
        tagIDs: [mockTagIDs[0], mockTagIDs[1], mockTagIDs[2]],
        tags: mockTags
    }
    mockTags = [
        {
            key: mockTagIDs[0],
            value: "TestTag1",
            articleIDs: [mockArticle.id]
        },
        {
            key: mockTagIDs[1],
            value: "TestTag2",
            articleIDs: [mockArticle.id]
        },
        {
            key: mockTagIDs[2],
            value: "TestTag3",
            articleIDs: [mockArticle.id]
        }
    ]
    mockArticle.tags = mockTags
    return mockArticle;
}

describe("Card", () => {
    it('should render a Card', () => {
        const mockArticle = mockArticleBuilder();
        render(<Card
            id={mockArticle.id}
            image={mockArticle.image}
            title={mockArticle.title}
            description={mockArticle.description}
            createDate={mockArticle.createDate}
            content={mockArticle.content}
            actions={mockArticle.actions}
            tagIDs={mockArticle.tagIDs}
            tags={mockArticle.tags}
        />)
        const card = screen.getByLabelText(`card-${mockArticle.id}`)
        expect(card).toBeInTheDocument()
    }),
    it('should render the main link container and link to article page', () => {
        const mockArticle = mockArticleBuilder();
        render(<Card
            id={mockArticle.id}
            image={mockArticle.image}
            title={mockArticle.title}
            description={mockArticle.description}
            createDate={mockArticle.createDate}
            content={mockArticle.content}
            actions={mockArticle.actions}
            tagIDs={mockArticle.tagIDs}
            tags={mockArticle.tags}
        />)
        const card = screen.getByLabelText(`main-${mockArticle.id}-link`)
        expect(card).toBeInTheDocument()
    }),
    it('should render the article image if present', () => {
        const mockArticle = mockArticleBuilder();
        render(<Card
            id={mockArticle.id}
            image={mockArticle.image}
            title={mockArticle.title}
            description={mockArticle.description}
            createDate={mockArticle.createDate}
            content={mockArticle.content}
            actions={mockArticle.actions}
            tagIDs={mockArticle.tagIDs}
            tags={mockArticle.tags}
        />)
        const image = screen.getByLabelText(`image-${mockArticle.id}`)
        expect(image).toBeInTheDocument()
    }),
    it('should render nothing if the article image is not present', () => {
        const mockArticle = mockArticleBuilder();
        render(<Card
            id={mockArticle.id}
            image={""}
            title={mockArticle.title}
            description={mockArticle.description}
            createDate={mockArticle.createDate}
            content={mockArticle.content}
            actions={mockArticle.actions}
            tagIDs={mockArticle.tagIDs}
            tags={mockArticle.tags}
        />)
        const noImage = screen.getByLabelText(`noImage-${mockArticle.id}`)
        expect(noImage).toBeInTheDocument()
    }),
    it('should render the article body', () => {
        const mockArticle = mockArticleBuilder();
        render(<Card
            id={mockArticle.id}
            image={mockArticle.image}
            title={mockArticle.title}
            description={mockArticle.description}
            createDate={mockArticle.createDate}
            content={mockArticle.content}
            actions={mockArticle.actions}
            tagIDs={mockArticle.tagIDs}
            tags={mockArticle.tags}
        />)
        const body = screen.getByLabelText(`body-${mockArticle.id}`)
        expect(body).toBeInTheDocument()
    }),
    it('should render the article title', () => {
        const mockArticle = mockArticleBuilder();
        render(<Card
            id={mockArticle.id}
            image={mockArticle.image}
            title={mockArticle.title}
            description={mockArticle.description}
            createDate={mockArticle.createDate}
            content={mockArticle.content}
            actions={mockArticle.actions}
            tagIDs={mockArticle.tagIDs}
            tags={mockArticle.tags}
        />)
        const title = screen.getByLabelText(`title-${mockArticle.id}`)
        expect(title).toBeInTheDocument()
    }),
    it('should render the article description', () => {
        const mockArticle = mockArticleBuilder();
        render(<Card
            id={mockArticle.id}
            image={mockArticle.image}
            title={mockArticle.title}
            description={mockArticle.description}
            createDate={mockArticle.createDate}
            content={mockArticle.content}
            actions={mockArticle.actions}
            tagIDs={mockArticle.tagIDs}
            tags={mockArticle.tags}
        />)
        const description = screen.getByLabelText(`description-${mockArticle.id}`)
        expect(description).toBeInTheDocument()
    }),
    it('should render nothing if the article description is not present', () => {
        const mockArticle = mockArticleBuilder();
        render(<Card
            id={mockArticle.id}
            image={mockArticle.image}
            title={mockArticle.title}
            description={""}
            createDate={mockArticle.createDate}
            content={mockArticle.content}
            actions={mockArticle.actions}
            tagIDs={mockArticle.tagIDs}
            tags={mockArticle.tags}
        />)
        const noDescription = screen.getByLabelText(`noDescription-${mockArticle.id}`)
        expect(noDescription).toBeInTheDocument()
    }),
    it('should render the article createDate', () => {
        const mockArticle = mockArticleBuilder();
        render(<Card
            id={mockArticle.id}
            image={mockArticle.image}
            title={mockArticle.title}
            description={mockArticle.description}
            createDate={mockArticle.createDate}
            content={mockArticle.content}
            actions={mockArticle.actions}
            tagIDs={mockArticle.tagIDs}
            tags={mockArticle.tags}
        />)
        const createDate = screen.getByLabelText(`createDate-${mockArticle.id}`)
        expect(createDate).toBeInTheDocument()
    }),
    it('should render the article contentTrunc if "homeLimit" in actions', () => {
        const mockArticle = mockArticleBuilder();
        render(<Card
            id={mockArticle.id}
            image={mockArticle.image}
            title={mockArticle.title}
            description={mockArticle.description}
            createDate={mockArticle.createDate}
            content={mockArticle.content}
            actions={mockArticle.actions}
            tagIDs={mockArticle.tagIDs}
            tags={mockArticle.tags}
        />)
        const contentTrunc = screen.getByLabelText(`contentTrunc-${mockArticle.id}`)
        expect(contentTrunc).toBeInTheDocument()
    }),
    it('should render the article contentFull if "homeLimit" not in actions', () => {
        const mockArticle = mockArticleBuilder();
        render(<Card
            id={mockArticle.id}
            image={mockArticle.image}
            title={mockArticle.title}
            description={mockArticle.description}
            createDate={mockArticle.createDate}
            content={mockArticle.content}
            actions={[]}
            tagIDs={mockArticle.tagIDs}
            tags={mockArticle.tags}
        />)
        const contentFull = screen.getByLabelText(`contentFull-${mockArticle.id}`)
        expect(contentFull).toBeInTheDocument()
    }),
    it('should render the article tags if present', () => {
        const mockArticle = mockArticleBuilder();
        render(<Card
            id={mockArticle.id}
            image={mockArticle.image}
            title={mockArticle.title}
            description={mockArticle.description}
            createDate={mockArticle.createDate}
            content={mockArticle.content}
            actions={mockArticle.actions}
            tagIDs={mockArticle.tagIDs}
            tags={mockArticle.tags}
        />)
        const withTags = screen.getByLabelText(`withTags-${mockArticle.id}`)
        expect(withTags).toBeInTheDocument()
    }),
    it('should render N/A if tags not present', () => {
        const mockArticle = mockArticleBuilder();
        render(<Card
            id={mockArticle.id}
            image={mockArticle.image}
            title={mockArticle.title}
            description={mockArticle.description}
            createDate={mockArticle.createDate}
            content={mockArticle.content}
            actions={mockArticle.actions}
            tagIDs={mockArticle.tagIDs}
            tags={[]}
        />)
        const withoutTags = screen.getByLabelText(`withoutTags-${mockArticle.id}`)
        expect(withoutTags).toBeInTheDocument()
    })
})