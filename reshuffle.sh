#!/usr/bin/env bash

# reset to beginning
rm -rf docs/*
git checkout HEAD docs

# kill empty index pages!
for index in $(find . -name index.md); do
    if ! grep -q '[^[:space:]]' <(tail -n+6 $index); then
        if [[ $(ls $(dirname $index) | wc -l | tr -d ' ') > 1 ]]; then
            yq -y 'values | {label: .title, position: .sidebar_position}' $index > "$(dirname $index)"/_category_.yml
            rm $index
        fi
    fi
done

mkdir docs/guides
yq -ny '{label: "Guides", position: 1}' > docs/guides/_category_.yml

mkdir docs/concepts
yq -ny '{label: "Concepts", position: 2}' > docs/concepts/_category_.yml

mv docs/migrated/tutorials docs/.
yq -ny '{label: "Tutorials", position: 3}' > docs/tutorials/_category_.yml

mkdir docs/reference
yq -ny '{label: "Reference", position: 4}' > docs/reference/_category_.yml

mv docs/migrated/contributing docs/.
sed -i'' -e 's/140/50/' docs/contributing/index.md

mv docs/migrated/getting-started-on-snowplow-open-source docs/guides/.
mv docs/migrated/getting-started-with-snowplow-bdp docs/guides/.
mv docs/migrated/open-source-quick-start docs/guides/.
mv docs/migrated/try-snowplow docs/guides/.

mv docs/migrated/collecting-data docs/reference/.

mv docs/migrated/enriching-your-data/what-is-enrichment docs/concepts/enrichment
mv docs/migrated/enriching-your-data docs/reference/.

mv docs/migrated/forwarding-events-to-destinations docs/reference/.

mv docs/migrated/managing-data-quality/failed-events/understanding-failed-events docs/concepts/failed-events
mv docs/migrated/managing-data-quality docs/reference/.

mv docs/migrated/modeling-your-data/what-is-data-modeling docs/concepts/data-modeling
mv docs/migrated/modeling-your-data docs/reference/.

mv docs/migrated/pipeline-components-and-applications docs/reference/.

mv docs/migrated/understanding-tracking-design docs/concepts/tracking-design

mv docs/migrated/understanding-your-pipeline/glossary-of-terms docs/concepts/glossary
mv docs/migrated/understanding-your-pipeline/architecture-overview-aws docs/concepts/architecture-overview
mv docs/migrated/understanding-your-pipeline/canonical-event docs/concepts/data-structure
mkdir docs/concepts/mini-and-micro
yq -ny '{label: "Snowplow Mini & Micro", position: 1000}' > docs/concepts/mini-and-micro/_category_.yml
mv docs/migrated/understanding-your-pipeline/what-is-snowplow-mini docs/concepts/mini-and-micro/.
mv docs/migrated/understanding-your-pipeline/what-is-snowplow-micro docs/concepts/mini-and-micro/.
rm docs/migrated/understanding-your-pipeline/_category_.yml
rm -r docs/migrated/understanding-your-pipeline

mv docs/migrated/using-the-snowplow-console docs/reference/.

rm -r docs/migrated