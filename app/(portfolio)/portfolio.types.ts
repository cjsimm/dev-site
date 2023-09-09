/* export type portfolioItemData = {
    title: string,
    thumbnail: string,
    description: string
} */

export type portfolioItemData = {
    id: string,
    title: string,
    description: string,
    href: string  //to pass to view button
    hrefInternal: boolean, //to decide on <Link /> or <a> element
    thumbnail: string,
    expandedContent: string // innerHTML for expanded element
}