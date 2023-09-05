export type portfolioItemData = {
    title: string,
    thumbnail: string,
    description: string
}

export type portfolioItemDataNew = {
    title: string,
    description: string,
    thumbnail: string,
    href: string  //to pass to view button
    hrefInternal: boolean, //to decide on <Link /> or <a> element
    expandedContent: string // innerHTML for expanded element
}