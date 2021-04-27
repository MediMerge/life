import React from 'react';
import Breadcumb from '@components/Breadcumb';
import { getOxygenRequirements } from '@lib/api';
import { NextSeo } from 'next-seo';
import '@fortawesome/fontawesome-svg-core/styles.css';
import OxygenCard from '@components/OxygenCard';

function OxygenRequirements({ oxygenReqData }) {
    const SEO = {
        title: `Oxygen Requirements Across India`,
        description: `Oxygen Concentrator Requirement Across Indian Organisations`,
        openGraph: {
            title: `Oxygen Requirements Across India`,
            description: `Oxygen Concentrator Requirement Across Indian Organisations`
        },
        additionalMetaTags: [
            {
                property: 'keywords',
                content: `covid19,india,resources,coronasafe,swasth alliance,covidfyi, need oxygen ,oxygen`
            }
        ]
    };
    return (
        <div>
            <NextSeo {...SEO} />
            <section className="flex flex-col ml-2 md:pt-10">
                <Breadcumb list={[{ href: null, name: 'Oxygen Requirement' }]} />
            </section>

            <section class="flex flex-col">
                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Name
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Location
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Oxygen Concentrators Required
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Beds
                                </th>
                                <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Capacity
                                </th>
                                <th scope="col" class="relative px-6 py-3">
                                    <span class="sr-only" />
                                </th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            { oxygenReqData.map((data) => <OxygenCard key={data.name + data.district} data={data} />) }
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default OxygenRequirements;

export async function getStaticProps({ params }) {
    return {
        props: {
            oxygenReqData: getOxygenRequirements()
        }
    };
}
