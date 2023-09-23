import { error } from '@sveltejs/kit'

export async function load({ params }: { params: { slug: string } }) {
    try {
        const post = await import('../../posts/' + params.slug + '.md')

        return {
            content: post.default,
            meta: post.metadata
        }

    } catch (e) {
        throw error(404, 'Could not find post ' + params.slug)
    }
}
