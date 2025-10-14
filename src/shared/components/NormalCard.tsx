// JSX-only component — explicit React import not required

interface NormalCardProps {
    title:string;
    description:string;
    imageUrl:string;
    link?:string;

}

export default function NormalCard({ title, description, imageUrl, link }: NormalCardProps) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <img src={imageUrl} alt={title} />
      {link && <a href={link}>Learn more</a>}
    </div>
  )
}
