/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import clsx from 'clsx'

import Loading from '@/components/ui/Loading'
import { UserData } from '@/features/user/types/user'
import useAvator from '@/libs/avator'

const TableGridRow = ({ data }: { data: UserData }) => {
  const { avator } = useAvator({ seed: data?.id || 1 })

  if (!data) {
    return (
      <div
        css={css`
          display: grid;
          grid-template-columns: 50% 30% 20%;
          grid-template-rows: 1fr;
          grid-column-gap: 0px;
          grid-row-gap: 0px;
          .div1 {
            grid-area: 1 / 1 / 2 / 2;
          }
          .div2 {
            grid-area: 1 / 2 / 2 / 3;
          }
          .div3 {
            grid-area: 1 / 3 / 2 / 4;
          }
        `}
      >
        <div className='div1'>
          <Loading />
        </div>
        <div className='div2'>
          <Loading />
        </div>
        <div className='div3'>
          <Loading />
        </div>
      </div>
    )
  }

  return (
    <div
      tabIndex={0}
      css={css`
        display: grid;
        grid-template-columns: 50% 30% 20%;
        grid-template-rows: 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        padding: 16px 24px;

        margin-bottom: 8px;

        &:last-child {
          margin-bottom: 0;
        }

        box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
          rgba(90, 125, 188, 0.05) 0px 0.25em 1em;

        .div1 {
          grid-area: 1 / 1 / 2 / 2;
        }
        .div2 {
          grid-area: 1 / 2 / 2 / 3;
        }
        .div3 {
          grid-area: 1 / 3 / 2 / 4;
        }
      `}
      className={clsx(
        `rounded-lg hover:bg-slate-50 hover:cursor-pointer`,
        `focus:outline-none focus:ring-2`,
        `focus:border-blue-700 focus:ring-blue-700`,
        `focus-visible:border-blue-700 focus-visible:ring-blue-700`
      )}
    >
      <div className='div1 flex items-center gap-2'>
        {`#${data.id}`}
        <picture>
          <img
            className='w-10 h-10 rounded-full'
            src={avator}
            alt={data.name}
          ></img>
        </picture>
      </div>
      <div className='div2'>{`${data.name}`}</div>
      <div className='div3'>{`${data.age}`}</div>
    </div>
  )
}

export default TableGridRow
