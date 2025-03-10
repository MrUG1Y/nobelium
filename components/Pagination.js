import Link from 'next/link'
import BLOG from '@/blog.config'
import { useLocale } from '@/lib/locale'

const Pagination = ({ totalPages, page }) => {
  const locale = useLocale()
  // console.log(locale)
  const currentPage = +page
  return (
    <div className="flex justify-between font-medium">
      <Link
        href={
          currentPage - 1 === 1
            ? `${BLOG.path || '/'}`
            : `/page/${currentPage - 1}`
        }
      >
        <p className={currentPage === 1 ? 'invisible' : 'block'}>
          <a rel="prev">← {locale.PAGINATION.PREV}</a>
        </p>
      </Link>
      <Link href={`/page/${currentPage + 1}`}>
        <p className={currentPage === totalPages ? 'invisible' : 'block'}>
          <a rel="next">{locale.PAGINATION.NEXT} →</a>
        </p>
      </Link>
    </div>
  )
}

export default Pagination
