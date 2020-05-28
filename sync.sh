#!/usr/bin/env bash

ORIG=../netoviz/
SRC=./src/

cp -r ${ORIG}/lib ${SRC}
cp ${ORIG}/server/api/common/alert-util.js ${SRC}/server/api/common/
cp ${ORIG}/server/api/grpc/*.proto ${SRC}/server/api/grpc/
cp ${ORIG}/server/api/grpc/*_pb.js ${SRC}/server/api/grpc/
cp ${ORIG}/server/graph/common/base.js ${SRC}/server/graph/common/
cp ${ORIG}/server/graph/common/diff-state.js ${SRC}/server/graph/common/
cp ${ORIG}/server/graph/force-simulation/link.js ${SRC}/server/graph/force-simulation/
cp ${ORIG}/server/graph/rfc-model/base.js ${SRC}/server/graph/rfc-model/
cp ${ORIG}/server/graph/rfc-model/*attr.js ${SRC}/server/graph/rfc-model/
cp ${ORIG}/.editorconfig .
cp ${ORIG}/.prettierrc .
# cp ${ORIG}/dot.env .

# diff -u ${ORIG}/server/index.js ${HERE}/server/index.js
