import React from 'react'
import Image from 'next/image'

type Props = {}

function About({ }: Props) {
  return (

    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

      <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
        <div>
          <Image className="w-full rounded-md" src="/steph_headshot.png" alt="A headshot of Stephiney Foley, a Technical Product Manager, Tech Though Leader, Mother, and Entreprenuer." width={200} height={200} priority />
        </div>


        <div className="mt-5 sm:mt-10 lg:mt-0">
          <div className="space-y-6 sm:space-y-8">

            <div className="space-y-2 md:space-y-4">
              <h2 className="text-3xl font-bold text-gray-800 lg:text-4xl dark:text-gray-200">
                I Ignite Growth for Individuals and Teams through Leadership and Innovation
              </h2>
              <p className="text-gray-500">
                Welcome to my personal website! I&apos;m an experienced leader with expertise in people management, data analysis, experimentation, market/customer insights, business development, growth, go-to-market strategy, and product/program management. I&apos;m passionate about building inclusive and high-performing teams that drive growth through user insights, data, storytelling, and creative problem-solving.
              </p>
              <p className="text-gray-500">
                I have a unique background as a female immigrant from China who served in the U.S. Army for 10 years after graduating from the United States Military Academy. Witnessing the events of 9/11 in my hometown of Brooklyn inspired me to join the Army, where I deployed to Afghanistan as a transportation and logistics officer.
              </p>
              <p className="text-gray-500">
                Following my deployment, I pursued my education at the Tuck School of Business at Dartmouth while my husband, a Navy Special Operations officer, underwent advanced training and deployments. We eventually settled in Seattle, where I began working at Amazon as a Product Manager and later became a Technical Product Manager.
              </p>
              <p className="text-gray-500">
                Balancing a successful career, entrepreneurship aspirations, and a growing family with two young boys, I&apos;ve learned the importance of prioritization and self-care. I embrace personal growth and constantly seek new avenues for development.
              </p>
              <p className="text-gray-500">
                Thank you for visiting my website. Let&apos;s connect and explore exciting opportunities together, fueled by innovation, inclusivity, and a relentless pursuit of excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
export default About
