import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';
import { enGB } from 'date-fns/locale';
import Comments from './Comments';

import useOptionalAuth from '../hooks/optionalAuthFetch';

export default function Article({ url }) {
  const { postId } = useParams();
  const concatUrl = `${url}${postId}`;

  const { data, loading, error } = useOptionalAuth(concatUrl); // optionalAuth to avoid redirecting
  if (loading) return <div>Loading...</div>;
  if (error)
    return (
      <div className="text-xl flex justify-center items-center h-full">
        Error: An error occurred. {error.message}
      </div>
    );

  return (
    <>
      <div className="pb-[50px] flex flex-col items-center">
        {' '}
        <div className="text-xl flex items-center flex-grow flex-col min-h-44 max-w-[70vw]">
          <div className="flex text-sm">
            {' '}
            <span>
              Published :{' '}
              {formatDistanceToNow(new Date(data.createdAt), {
                addSuffix: true,
                locale: enGB,
              })}{' '}
              by {data.author.pseudo}
            </span>{' '}
          </div>
          <h1 className="text-4xl pb-4">{data.title}</h1>

          <span>{data.Content}</span>
          <span className="pr-8 pl-8 text-center leading-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
            nesciunt dolore officia expedita voluptate id corrupti obcaecati
            adipisci deserunt labore doloremque minima accusantium,
            necessitatibus ad alias minus hic esse error! Corrupti amet minus
            quidem, nihil excepturi dolore ipsum distinctio error tenetur veniam
            repellendus, porro id doloribus soluta dolor eaque qui? Maxime,
            voluptatum. Quasi, maiores? Eveniet velit necessitatibus dolores
            consequatur corrupti! Molestiae exercitationem nihil blanditiis
            neque itaque accusantium, animi obcaecati nam sed expedita ratione
            quo! Culpa officiis impedit quaerat est laudantium reiciendis!
            Expedita deleniti error provident aperiam optio possimus natus
            dicta. Repudiandae ullam architecto repellat, dolorem cupiditate
            praesentium aperiam doloribus quis nulla distinctio aspernatur
            veniam at repellendus eum, autem, consequatur quod possimus expedita
            ex vitae debitis quidem reiciendis obcaecati tempore. Illo? Labore
            fuga quo corrupti itaque quae ratione deserunt molestiae molestias
            beatae accusamus nulla accusantium tenetur sint explicabo
            praesentium, error, et libero? Facilis esse deleniti sint vel in
            distinctio neque natus! Sint non, eveniet, neque mollitia itaque
            ipsa porro voluptates ratione expedita molestias eligendi hic
            laborum odit quae! Voluptatum natus, et, atque eaque nam adipisci
            cupiditate obcaecati necessitatibus sit accusamus similique. Ratione
            ipsa fuga consectetur, iure quam facere adipisci! Harum inventore
            beatae molestiae dolorum sint laudantium quisquam iste pariatur.
            Officiis sapiente id amet facilis blanditiis quia deserunt nam.
            Ducimus, quasi non? Dicta odio sint, excepturi libero inventore
            iste, perferendis nesciunt itaque voluptatibus harum praesentium?
            Aperiam omnis labore quia? Deserunt, fugit aut nobis beatae ab amet
            quae quibusdam doloribus modi sit eum. Officiis harum iusto,
            dignissimos, in impedit placeat, quidem assumenda ut excepturi ullam
            voluptatum magni debitis sit. Excepturi, quisquam nostrum iusto,
            quia quidem commodi ullam aliquam tempora sequi architecto
            consequuntur cumque. Sed sequi assumenda, cumque maxime in quis! Vel
            aspernatur non aperiam reiciendis officia. Similique praesentium
            esse pariatur expedita magni nihil tenetur reiciendis iste dolor
            quasi? Praesentium perspiciatis neque voluptatibus quo. Iure quasi
            ab nulla laborum provident maiores numquam atque sunt sapiente! Id
            distinctio dolorem, soluta laboriosam illo libero optio tempore
            repellat, deserunt autem dolore delectus, neque earum quidem nemo
            totam. Dignissimos mollitia accusamus vitae repudiandae explicabo
            unde nihil sint natus sit assumenda consequuntur, debitis cumque
            nesciunt asperiores ducimus, repellat quasi fugiat ipsa. Atque
            molestiae dignissimos ipsum cumque labore expedita dicta? Sapiente
            minus, nisi ut nihil eligendi nam aut accusantium itaque quas omnis
            unde natus cupiditate. Veritatis temporibus tempore fugiat, modi
            repellat nam voluptas magni. Eveniet, natus! Nihil sapiente enim
            velit. Consequuntur aliquid quasi numquam? Iusto corporis non soluta
            unde quos praesentium sequi possimus earum, magnam voluptatum dolore
            ab tempora libero optio ullam enim nam. Consequuntur voluptas optio
            perspiciatis numquam fugiat. Repellendus aliquam deleniti placeat,
            aut incidunt temporibus inventore officiis? Id ad rem quisquam unde
            aperiam eius distinctio aut sunt blanditiis autem ea libero
            doloribus, ipsum voluptas totam, nulla tenetur dolorem. Facilis
            corrupti similique est amet corporis maxime excepturi consequatur
            animi sed vitae velit dignissimos, temporibus quasi esse nobis
            dolore aut? Rem recusandae unde, impedit alias repellat quas
            temporibus voluptates odit. Commodi accusamus laborum voluptatem ut
            ipsum qui nulla id in culpa ratione vero eos quam, esse, excepturi
            animi quisquam tempore neque incidunt ex perferendis dolore eius?
            Architecto officiis saepe velit! Veritatis voluptatibus cupiditate
            voluptatum velit sed in commodi sint minus tempore nihil error
            laboriosam consequuntur, nam voluptates dolor quam quo voluptate
            modi iure, perspiciatis eos. Consequatur aperiam eius iusto saepe.
            Perferendis, ducimus quam nemo possimus fugiat, in at repellendus
            libero veniam cum itaque unde quidem porro error sequi excepturi
            quae assumenda quod, quis dolores voluptas animi rem! Provident,
            aut? Autem? Minima recusandae distinctio porro officia rerum
            explicabo sint temporibus exercitationem? Accusamus hic provident
            nostrum earum ipsum! Assumenda est, doloremque soluta nemo unde
            quas? Corporis obcaecati, corrupti sunt nihil molestias quaerat?
            Illum omnis, explicabo dolores accusamus eum nam! Fugit quas animi
            illum ab, velit eos deserunt
          </span>
        </div>
        <div className="flex justify-center mx-auto flex-col  overflow-y-auto max-w-[50vw] pt-8 pb-[200px]">
          <Comments
            comments={data.comments}
            postId={data.id}
          />
        </div>
      </div>
    </>
  );
}

Article.propTypes = {
  url: PropTypes.string.isRequired,
};
